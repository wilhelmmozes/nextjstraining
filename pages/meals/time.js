function IsgTime({ timeDetails }) {
    console.log('ini time', timeDetails);
    return (
        <div className="app">
            <p>{timeDetails.datetime}</p>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Jakarta');
    const timeDetails = await res.json();
    return {
        props: {timeDetails},
        revalidate: 3
    }
}

export default IsgTime