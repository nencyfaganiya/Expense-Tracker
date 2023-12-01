import React from 'react'
import { useForm } from 'react-hook-form';

export default function Header() {
    return (
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
            <a href='login'>sign in</a>
            <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
        </div>
    )
}

