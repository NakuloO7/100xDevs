

export default function({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <div>
        <div className="text-center border-b">
            20% off on every product if you signin now!
        </div>
        {children}
        </div>
    )

}