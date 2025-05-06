export default function Button({ className, children, onClick, style }) {
  return (
    <div className={`bg-[#9538E2] rounded-2xl px-2 md:rounded-4xl w-fit ${className}`} style={style}>
        <button type="button" className="block p-2 cursor-pointer" onClick={onClick}>{children}</button>
    </div>
  )
}
