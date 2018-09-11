import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/admin">
          <a style={linkStyle}>Admin</a>
        </Link>
        <Link href="/partners">
          <a style={linkStyle}>Partners</a>
        </Link>
    </div>
)

export default Header