export const Footer = () => {
    return (
      <footer className="section-footer">
        <div className=" flex justify-center items-center">
          <div className="content_4">
            <h4>NEWSLETTER</h4>
            <p className="mt-5">
              Be the first to know about new 
              arrivals, Movies & promos!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <hr /><br/>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>Design and Code by Akshay Dhangar</p>
          </div>
        </div>
      </footer>
    );
  };