import { useState, useEffect } from 'react';

export default function ATKForm({ editingData, isEditing, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        nama: '',
        jenis: '',
        qty: ''
    });

    useEffect(() => {
        if (editingData) {
            setFormData({
                nama: editingData.nama || '',
                jenis: editingData.jenis || '',
                qty: editingData.qty || ''
            });
        }
    }, [editingData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ nama: '', jenis: '', qty: '' });
    };

    const handleCancel = () => {
        setFormData({ nama: '', jenis: '', qty: '' });
        onCancel();
    };

    return (
        <div>
            <h2 className="form-title">
                {isEditing ? 'Edit Item' : 'Add New Item'}
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">Nama Barang</label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            required
                            placeholder="Enter item name"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Jenis</label>
                        <input
                            type="text"
                            name="jenis"
                            value={formData.jenis}
                            onChange={handleChange}
                            required
                            placeholder="Enter type"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Quantity</label>
                        <input
                            type="number"
                            name="qty"
                            value={formData.qty}
                            onChange={handleChange}
                            min="1"
                            required
                            placeholder="Enter quantity"
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn-primary">
                        {isEditing ? 'Save Changes' : 'Add Item'}
                    </button>
                    {isEditing && (
                        <button type="button" onClick={handleCancel} className="btn-secondary">
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
