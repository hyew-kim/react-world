import '@/styles/main.css';
import Nav from '@/component/Nav';
import Footer from '@/component/Footer';
import Link from 'next/link';
import { Preview } from '@/app/article/component/Preview';
import { Sidebar } from '@/component/Sidebar';
export default function Home() {
  return (
    <>
      <Nav />
      <main className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  {false && (
                    <li className="nav-item">
                      <Link className="nav-link" href="">
                        Your Feed
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link className="nav-link active" href="">
                      Global Feed
                    </Link>
                  </li>
                </ul>
              </div>

              <Preview />
              <Preview />

              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    2
                  </a>
                </li>
              </ul>
            </div>

            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
