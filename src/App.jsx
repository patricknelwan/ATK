import { useState, useEffect } from 'react';
import { getAllAtk, updateAtk, createAtk, deleteAtk } from './services/api';
import ATKForm from './components/ATKForm';
import ATKTable from './components/ATKTable';
import './App.css';

export default function App() {
    const [items, setItems] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingData, setEditingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAllAtk();
            setItems(data);
        } catch (err) {
            setError('Failed loading data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (formData) => {
        try {
            await createAtk(formData.nama, formData.jenis, formData.qty);
            loadItems();
        } catch (err) {
            alert(err.message);
        }
    };

    const handleUpdate = async (formData) => {
        try {
            await updateAtk(editingId, formData.nama, formData.jenis, formData.qty);
            cancelEdit();
            loadItems();
        } catch (err) {
            alert(err.message);
        }
    };

    const handleEdit = (item) => {
        setEditingId(item.id);
        setEditingData(item);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete for sure?')) {
            try {
                await deleteAtk(id);
                loadItems();
            } catch (err) {
                alert(err.message);
            }
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditingData(null);
    };

    return (
        <div className="app-container">
            <div className="app-content">
                <div className="app-header">
                    <h1 className="app-title">ATK Inventory</h1>
                </div>
        
                {error && <div className="error-alert">{error}</div>}
        
                <div className="card">
                    <ATKForm
                        editingData={editingData}
                        isEditing={editingId !== null}
                        onSubmit={editingId ? handleUpdate : handleCreate}
                        onCancel={cancelEdit}
                    />
                </div>
        
                <div className="card">
                    {loading ? (
                        <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <ATKTable
                            items={items}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}