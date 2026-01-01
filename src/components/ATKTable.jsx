export default function ATKTable({ items, onEdit, onDelete }) {
    if (items.length === 0) {
        return (
            <div className="empty-state">
                <p className="empty-state-title">No items found</p>
                <p className="empty-state-subtitle">Add your first item using the form above</p>
            </div>
        );
    }

    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr className="table-header-row">
                        <th className="table-header">ID</th>
                        <th className="table-header">Nama</th>
                        <th className="table-header">Jenis</th>
                        <th className="table-header">Qty</th>
                        <th className="table-header-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr
                            key={item.id}
                            className={`table-row ${index % 2 === 0 ? 'table-row-alt' : ''}`}
                        >
                            <td className="table-cell-id">#{item.id}</td>
                            <td className="table-cell-name">{item.nama}</td>
                            <td className="table-cell">
                                <span className="badge-purple">{item.jenis}</span>
                            </td>
                            <td className="table-cell">
                                <span className="badge-blue">{item.qty}</span>
                            </td>
                            <td className="table-cell">
                                <div className="table-actions">
                                    <button onClick={() => onEdit(item)} className="btn-edit">
                                        Edit
                                    </button>
                                    <button onClick={() => onDelete(item.id)} className="btn-delete">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
