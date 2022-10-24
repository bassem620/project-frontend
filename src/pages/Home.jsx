import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getAds, reset } from "../features/ads/adSlice";
import AdBox from "../components/AdBox";
import Search from "../components/search";

const Home = () => {
    const dispatch = useDispatch();

    const {user} = useSelector( state => state.user);
    const {ads, isError, isLoading, message} = useSelector( state => state.ad);

    useEffect( _ => {
        if(isError){
            console.log(message);
        }
        dispatch(getAds());
        return () => {
            dispatch(reset());
        }
    }, [user, isError, message, dispatch]);

    if(isLoading){
        return <Spinner/>;
    }

    return (
        <>
        <section className="home">
        <Search />
            <div className="container-lg">
                <h2 className="title text-dark-1">Recently added</h2>
                { ads.length > 0 ?
                    (
                        <div className="row">
                        {ads.map( ad => (
                            <AdBox 
                            key={ad._id}
                            user={user}
                            title={ad.title}
                            date={ad.createdAt}
                            price={ad.price}
                            liked={ user ? (user.id === ad.ownerID ? true : false) : null}
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
        </>
    );
}

export default Home;