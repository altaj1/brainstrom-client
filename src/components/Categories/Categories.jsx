

import Container from '../Shared/Container'
import { categories } from './categoriesData'
import CategoryBox from './CategoryBox'
const Categories = ({handelCategory}) => {
  return (
    <Container>
      <div className='pt-4 flex items-center  justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} handelCategory={handelCategory} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  )
}

export default Categories
