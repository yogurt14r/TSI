import React from 'react';

const Sidebar = () => {
    const categories = [
        { id: 1, name: 'Самса' },
        { id: 2, name: 'Пицца' },
        { id: 3, name: 'Бургеры' },
        { id: 4, name: 'Напитки' },
        { id: 5, name: 'Десерты' },
    ];

    return (
        <div className="flex min-h-screen">
            <div className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">Категории</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} className="mb-2">
                            <a
                                href={`#${category.name}`}
                                className="block p-2 rounded hover:bg-gray-700 transition duration-300"
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;