export default function ListTask() {
    return (
        <div className="text-black shadow">
            <div className="p-4 bg-gray-300 text-blue-500 font-bold rounded-t-xl border-none">
                <h2 className="flex justify-start items-start">Lista de Tarefas</h2>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-b-xl border-none">
                <div className="flex flex-col text-gray-500">
                    <p className="font-bold">Tarefa 1</p>
                    <p className="text-sm">20/10/2024</p>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="block h-4 w-4 rounded-md border-0 p-4 ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500/50" name="title" />
                </div>
            </div>
        </div>
    )
}