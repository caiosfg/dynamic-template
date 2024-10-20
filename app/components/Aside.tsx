"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, SquaresPlusIcon, Square3Stack3DIcon } from '@heroicons/react/20/solid'
import Modal from "../components/Modal";
import {useState} from "react";


const links = [
    { 
        label: 'ELEMENTO ORDENAVEL 1',
        menu: [
            {id: 1, label: 'Elemento 1', href: '/dashboard'},
            {id: 2, label: 'Elemento 2', href: '/dashboard'},
            {id: 3, label: 'Elemento 3', href: '/dashboard'},
            {id: 4, label: 'Elemento 4', href: '/dashboard'},
        ]
    },
    { 
        label: 'ELEMENTO ORDENAVEL 2',
        menu: [
            {id: 5, label: 'Lista de Tarefas', href: '/dashboard'},
            {id: 6, label: 'Grade de Cores', href: '/dashboard'},
        ]
    },
]

export default function Aside() {
    const [showModal, setShowModal] = useState(false);

    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen" aria-label="Sidebar">
            <div className="h-full px-3 py-4 font-bold overflow-y-auto bg-gradient-to-b from-blue-400 to-blue-700 space-y-6">
                <div className="my-4 flex items-center justify-center space-x-5">
                    <Square3Stack3DIcon className="size-10 fill-white -rotate-12" />
                    <h1>CAMADAS</h1>
                </div>
                <ul className="space-y-2">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Menu>
                                <MenuButton className="flex items-center  justify-between rounded-md bg-blue-600 w-full py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner focus:outline-none data-[hover]:bg-blue-700 data-[open]:bg-blue-800 data-[focus]:outline-1 data-[focus]:outline-white">
                                    <SquaresPlusIcon className="size-4 fill-white/100" />
                                    {link.label}
                                    <ChevronDownIcon className="size-4 fill-white/70" />
                                </MenuButton>
                                <MenuItems transition anchor="bottom end" className="w-64 origin-top-right z-50 rounded-xl border bg-white/85 p-1 text-sm/6 text-gray-500 transition duration-100 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                    {link.menu.map((linkMenu) => (
                                        <MenuItem key={linkMenu.id}>
                                            <Link href={`${linkMenu.href}?id=${linkMenu.id}`} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/100"> 
                                                {linkMenu.label}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </li>
                    ))}
                </ul>
                <button 
                    className="w-full p-4 font-bold text-base rounded-md shadow bg-green-500 hover:bg-green-600 focus:bg-green-600"
                    onClick={() => setShowModal(true)}
                >
                    Modelo de Modal de Componente
                </button>
                {showModal &&
                    <Modal title={'Modal de Configurações'} onClose={() => setShowModal(false)}>
                        <div>
                            <form>
                                <div className="text-sm">
                                    <h2>Os campos devem ser referentes ao conteúdo dos Elementos editáveis do bloco escolhido.</h2>
                                </div>
                                <div className="pt-2 space-y-4">
                                    <label className="block text-sm leading-6 text-gray-700 font-bold">
                                        Subtítulo:
                                        <input className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50" type="text" name="subtitle" />
                                    </label>
                                    <label className="block text-sm leading-6 text-gray-700 font-bold">
                                        Título:
                                        <input className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-500 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50" type="text" name="title" />
                                    </label>
                                    <label className="text-sm leading-6 text-gray-700 font-bold flex flex-col">
                                        Classe do Ícone:
                                        <select className="h-10 mt-1 rounded-md border pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500/50">
                                            <option value="1">Elemento 1</option>
                                            <option value="2">Elemento 2</option>
                                            <option selected value="3">Elemento 3</option>
                                            <option value="4">Elemento 4</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </Modal>
                }
                <button className="w-full p-2 font-bold text-base rounded-md shadow bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-600">Salvar Layout</button>
            </div>
        </aside>
    );
}