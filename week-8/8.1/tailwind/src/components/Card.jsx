
export const Card = ({
    title,
    showWarning,
    orderCount,
    amount
})=>{
    return(
        <div className="bg-white rounded shadow-sm">
            <div>
                {title}
                ?
            </div>
            <div className="flex justify-between"></div>
            <div>
                {amount}
            </div>
            {orderCount ? <div>} 
        </div>
    )
}