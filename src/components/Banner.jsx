import image from '../assets/banner.jpg'


export default function Banner() {
  return (
    <div>

        <div className="hero bg-base-200 py-20 px-28  my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={image}
                className="max-w-sm rounded-lg shadow-2xl " />
                <div className='text-left'>
                    <h1 className="text-5xl font-bold pb-8">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    </div>
  )
}
