import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Book } from '../component/Book'

const GET_BOOKS = gql`
  query GetBooks {
    getAllBooks {
      asin
      title
      author
      pages
    }
  }
`;

export const Books = () => {

  const navigate = useNavigate()

  const { loading, error, data } = useQuery(GET_BOOKS, {
    onError: (err) => {
      switch (err.message) {
        case 'jwt expired':
          AuthService.logout()
          navigate('/signin')
          window.location.reload()
          break;
        // TODO: resolver otros casos de error
        default:
          break;
      }
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container">
      <div className="row">
        {data.getAllBooks.map((book) => <Book key={book.asin} data={book} />)}
      </div>
    </div>
  );
}