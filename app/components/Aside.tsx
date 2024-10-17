export default function Aside() {
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-blue-400 to-blue-700">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100">
                            <span className="ms-3">Elemento Ordenável 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100">
                            <span className="ms-3">Elemento Ordenável 2</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}