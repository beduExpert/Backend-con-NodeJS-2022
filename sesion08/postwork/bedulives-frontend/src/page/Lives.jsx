import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Live } from '../component/Live'

const GET_LIVES = gql`
  query GetLives {
    getAllLives {
      id
      title
      subtitle
      date
      time
      mode
      img
    }
  }
`;

export const Lives = () => {

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_LIVES, {
    onError: (err) => {
      console.log(err.message === 'jwt expired')
      switch (err.message) {
        case 'jwt expired':
          AuthService.logout()
          navigate('/signin')
          window.location.reload()
          break;
        default:
          break;
      }
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div className="container">
      <div className="row">
        {data.getAllLives.map((live) => <Live key={live.id} data={live} />)}
      </div>
    </div>
  );
}