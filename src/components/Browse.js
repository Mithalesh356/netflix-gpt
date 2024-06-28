
import useMovies from '../customHooks/useMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
const Browse = () => {
    useMovies();
  return (
      <div>
          <Header />
          <MainContainer />
          <SecondryContainer/>
    </div>
  )
}
export default Browse
    