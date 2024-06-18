const Card = () => {
    return (
        <div className="card card-compact w-96  shadow-xl">
            <figure><img src="https://th.bing.com/th/id/OIP.gbV0LZuOe1mzPYh72-aERQHaHa?w=640&h=640&rs=1&pid=ImgDetMain" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-green-800 ">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card