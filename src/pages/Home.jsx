import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import AdBox from "../components/AdBox";
import Search from "../components/search";

const Home = () => {
    const {user} = useSelector( state => state.user);
    const {ads, isLoading} = useSelector( state => state.ad);

    return (
        <>
        { isLoading ? <Spinner/> : null }{
        (
        <section className="home">
            <Search />
            <div className="container-lg">
                <h2 className="title text-dark-1">Recently added</h2>
                { ads.length > 0 ?
                    (
                        <div className="row">
                        {ads.map( (ad, index) => (
                            <AdBox 
                            key={index}
                            user={user}
                            title={ad.title}
                            date={ad.createdAt}
                            price={ad.price}
                            liked={ user ? (user.fav).includes(ad._id) : null}
                            images={ad.imgs}
                            id={ad._id}
                        />
                        ))}
                        </div>
                    ) : (
                        <h3>There is no ads yet.</h3>
                    )
                }
            </div>
        </section>
        )}
        </>
    );
}

export default Home;