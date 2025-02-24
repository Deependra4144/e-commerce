import MenCategory from '../assets/Images/MenCategory.webp'
import womenCategory from '../assets/Images/womenCategory.jpg'
import kidCategory from '../assets/Images/kidCategory.jpg'
function CategorySection() {
  let Categories = [
      {
        title:'Mens',
        imageURL:MenCategory
      },
      {
        title:'Kids',
        imageURL:kidCategory
      },
      {
        title:'Women',
        imageURL:womenCategory
      }
      
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8'>
        {Categories.map((Category,index)=>{
          return(
            <div key={index} className='overflow-hidden relative h-64 rounded-md cursor-pointer hover:shadow-xl'>
              <img src={Category.imageURL} className='w-full h-full object-fill transform transition-transform duration-300 hover:scale-110'/>
              <div className='absolute top-28 right-10 text-center'>
                <p className='text-xl font-bold'>{Category.title}</p>
                <p className='text-gray-600'>View All</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default CategorySection
