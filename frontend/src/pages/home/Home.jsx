import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import "../home/home.scss";
import flower from "../../foto/flower.jpg";
import axios from "axios";
import Helmet from "react-helmet"
const Home = () => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");


  // const [sort,setSort] = useState({})
  function getData() {
    const URL = "http://localhost:8080/description/";
    axios.get(URL).then((res) => setData(res.data))
  }
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  useEffect(() => {
    getData()
  }, [])

  async function handleDelete(id) {
    await axios.delete(`http://localhost:8080/description/${id}`)
    getData()
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Section1 */}
      <section className='wrapper1'>
        <Hero />
      </section>
      {/* Section2 */}
      <section className='wrapper2'>
        <div className='download-now'>
          <span>Do you like this awesome and free WordPress WooCommerce theme?</span>
          <button className='download'>Download Now!</button>
        </div>
      </section>
      {/* Section3 */}
      <section className='wrapper3'>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <input style={{ margin: "20px", border: "2px solid darkblue", height: "40px", width: "300px", padding: "10px" }} value={search} type='text' onChange={(e) => handleSearch(e)} placeholder="Search..." />
              {data && data.filter((d) => {
                return d.name.toLowerCase().includes(search.toLowerCase())
              }).map((d) => (
                <div key={d.id} className='col-12'>
                  <h1>{d.name}</h1>
                  <div className='img-desription'>
                    <img src={d.image} alt='img' />
                    <p>{d.description}
                      <div style={{ marginTop: '15px', marginLeft: "20px" }}>
                        <button style={{ border: "none", borderRadius: "7px", background: "green", color: "white", height: "40px", width: "100px" }} onClick={() => handleDelete(d._id)}>Delete</button>
                      </div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='col-5'>
              <input type='text' placeholder='Search...' />
              <button><i class="fa-solid fa-magnifying-glass"></i></button>
              <div className='popular'>
                <p>
                  <span style={{ marginRight: "15px" }}>
                    POPULAR
                  </span>
                  <span>
                    RECENT
                  </span>
                </p>
                <img src={flower} alt='img' />
                <span className='template'> Template: Sticky</span>
                <p>Jan 7,2015</p>

                <img src={flower} alt='img' />
                <span className='template'> Template: Sticky</span>
                <p>Jan 7,2015</p>

                <img src={flower} alt='img' />
                <span className='template'> Template: Sticky</span>
                <p>Jan 7,2015</p>

                <img src={flower} alt='img' />
                <span className='template'> Template: Sticky</span>
                <p>Jan 7,2015</p>

                <img src={flower} alt='img' />
                <span className='template'> Template: Sticky</span>
                <p>Jan 7,2015</p>

                <ul style={{ listStyle: "none" }}>
                  <h5 style={{ color: "green" }}>
                    Recent Comments
                  </h5>
                  <li style={{ borderBottom: "1px solid rgb(226, 223, 223)", marginBottom: "15px" }}> <i style={{ paddingRight: "15px" }} class="fa-regular fa-message"></i>hhhh on <span style={{ color: "green" }}>Hello world!</span></li>
                  <li style={{ borderBottom: "1px solid rgb(226, 223, 223)", marginBottom: "15px" }}><i style={{ paddingRight: "15px" }} class="fa-regular fa-message"></i>Stefanos on Bullet Point Test <span style={{ color: "green" }}>Bullet Point Test </span></li>
                  <li style={{ borderBottom: "1px solid rgb(226, 223, 223)", marginBottom: "15px" }}><i style={{ paddingRight: "15px" }} class="fa-regular fa-message"></i>mimi on Gallery <span style={{ color: "green" }}>Gallery</span></li>
                  <li style={{ borderBottom: "1px solid rgb(226, 223, 223)", marginBottom: "15px" }}><i style={{ paddingRight: "15px" }} class="fa-regular fa-message"></i>Finn on Page with comments <span style={{ color: "green" }}>Page with comments</span></li>
                  <li style={{ borderBottom: "1px solid rgb(226, 223, 223)", marginBottom: "15px" }}><i style={{ paddingRight: "15px" }} class="fa-regular fa-message"></i>gargi on Page with comments <span style={{ color: "green" }}>Page with comments</span></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home