import './Discount.css'
import DiscountImg from '../../imgs/discount.png'

const Discount = () => {
    return (
        <section className="discount" id="discount">
            <div className="image">
                <div className="content">
                    <h2>We Have A Discount</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius incidunt voluptatum explicabo labore quos nobis nisi quia enim rem cupiditate magnam delectus maxime nostrum soluta, maiores sint facilis voluptatibus dignissimos, id illo placeat? Ullam deserunt a modi hic aspernatur expedita!
                    </p>
                    <img src={DiscountImg} alt="" />
                </div>
            </div>
            <div className="form">
                <div className="content">
                    <h2>Request A Discount</h2>
                    <form action="">
                        <input className="input" type="text" name="name" placeholder="Your Name" />
                        <input className="input" type="email" name="email" placeholder="Your Email" />
                        <input className="input" type="text" name="mobile" placeholder="Your Phone" />
                        <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Discount