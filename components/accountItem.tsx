export default function AccountItem({ item, value, is_date }: { item: string, value: string | undefined, is_date?: boolean }) {
    if (is_date && value) {
        value = new Date(value).toLocaleString();
    }

    return (
        <div className="flex flex-col sm:flex-row space-x-4 sm:items-center">
            <p className="text-lg sm:text-2xl font-bold">{item}:</p>
            <p className="bg-gray-200 rounded-full w-max px-2">{value}</p>
        </div>
    )
}