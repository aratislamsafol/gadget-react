export default function Button({ className, children }) {
  return (
    <div className={`text-white bg-[#9538E2] rounded-2xl px-2 md:rounded-4xl w-fit ${className}`}>
        <button type="button" className="block p-2 cursor-pointer">{children}</button>
    </div>
  )
}
