

import Container from '../Shared/Container'
import { categories } from './categoriesData'
import CategoryBox from './CategoryBox'
const Categories = ({handelCategory}) => {
  return (
    <Container>
      <div className='pt-10 flex items-center scrollbar justify-center  space-x-4 overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} handelCategory={handelCategory} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  )
}

export default Categories
