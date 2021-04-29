import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import whio from '../images/whio.jpeg';
import bushbashing from '../images/bushbashing.jpeg';
import stream from '../images/stream.jpeg';
import outsidehut from '../images/outsidehut.jpeg';
import redlight from '../images/redlight.jpeg';
import hunters from '../images/hunters.jpeg';
import orangetriangle from '../images/orangetriangle.jpeg';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        display: 'flex',
    },
    cardReverse: {
        display: 'flex',
    },
    '@media (min-width: 1024px)': {
        card: {
            flexDirection: 'row',
        },
        cardReverse: {
            flexDirection: 'row-reverse',
        },
    },
    '@media (max-width: 1024px)': {
        card: {
            flexDirection: 'column',
        },
        cardReverse: {
            flexDirection: 'column',
        },
    },
    image: {
        height: '40vh',
        minWidth: 'min(60vh, 100vw)',
        objectFit: 'cover',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px'
    },
}));

export const GalleryCard: React.FC<Props> = (props) => {
    const classes = useStyles();

    return <div className={props.reverse ? classes.cardReverse : classes.card}>
        <img src={props.imageSrc} className={classes.image}/>
        <div className={classes.description}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    </div>;
};

type Props = {
    title: string,
    imageSrc: string,
    reverse?: boolean
}

export const Card1: React.FC = () => {
    return <GalleryCard title="WHIO" imageSrc={whio}>
        <p>We saw about five whio on the stream, which is amazing considering they are rarer than some species of kiwi.
            Whio have adapted to a harsh environment that is prone to flooding. They nest along the riverbank in
            shallow, twig, grass and down-lined scrapes in caves; under river-side vegetation; or in log-jams, dry punga
            fronds, and toi toi. Floods can destroy nests, change the shape of the river, separate families, wash away
            food sources, and force whio into side streams where they lose the water as their first defence. All this
            can have an extreme impact on breeding success, and a significant impact on whio populations.</p>
        <p>You can learn about whio <a
            href="https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/blue-duck-whio/">here.</a></p>
    </GalleryCard>;
};

export const Card2: React.FC = () => {
    return <GalleryCard title="PINE FORREST BASHING" imageSrc={bushbashing} reverse={true}>
        <p>It took us <b>three hours</b> to find the start of the river track. We had GPS and maps, everything pointed
            to where a track should be but a whole lot of gorse was in the way. What was even scarier than being lost in
            pine forestry was the very recent pig sign, and the occasional snuffle...</p>
        <p>On our way back we found the track that we should have taken, hidden by cutting grass.</p>
    </GalleryCard>;
};

export const Card3: React.FC = () => {
    return <GalleryCard title="STREAM FAUNA" imageSrc={stream}>
        <p>There was lots of different plants along the stream. One particulary nasty one was <i>Ongaonga</i>. We all
            accidentally walked into some at some stage. The stings burns and feels itchy, then you are left with a pins
            and needles sensation for the rest of the day.</p>
        <p>The toxin present in the spines is triffydin (or tryfydin). This toxin contains histamine, serotonin and
            acetylcholine, the latter causing powerful stimulation of the parasympathetic nerve system. Multiple
            stingings can have a very painful reaction which causes inflammation, a rash, and itching. In high
            concentrations it can also cause: loss of motor movement, paralysis, drop in blood pressure, convulsions,
            blurred vision and confusion.</p>
    </GalleryCard>;
};

export const Card4: React.FC = () => {
    return <GalleryCard title="THE HUT PROPER" imageSrc={outsidehut} reverse={true}>
        <p>Mangamako hut is a 6 bunk hut with an open fire, lots of pots and pans, and a nice table with chairs. We were
            8 all up so some of us shared bunks.</p>
    </GalleryCard>;
};

export const Card5: React.FC = () => {
    return <GalleryCard title="RED LIGHT" imageSrc={redlight}>
        <p>This is a picture from the top row of bunks were the five of us slept. Nic had a red-light headlamp on when
            he took this photo.</p>
        <p>Red-light head lamps are a good idea in the bush because you can use them without disturbing nocturnal fauna,
            like the <i>kiwi</i> which we think we heard snuffles of!</p>
    </GalleryCard>;
};

export const Card6: React.FC = () => {
    return <GalleryCard title="HUNTERS!" imageSrc={hunters} reverse={true}>
        <p>When you are hiking in the bush, even in the most remote parts of New Zealand you are bound to meet others.
            These three hunters were two grandfathers and their grandson on a hunting trip through Te Uruwera. Deklin
            (the grandson) who is only 14 shot a hind, we were lucky enough to have some generously offered to us. I
            love meeting hunters while hiking!</p>
        <p>The visitor's book is kept in the hut, everyone who stays should write their intentions so DOC knows who has
            been around. It also makes it easier to track missing peoples. This hut had only six entries for the whole
            of 2021, which makes it even luckier that we ran into Deklin and his grandfathers.</p>
    </GalleryCard>;
};

export const Card7: React.FC = () => {
    return <GalleryCard title="ORANGE MARKERS" imageSrc={orangetriangle}>
        <p>Orange markers are used in the bush to mark the track. There wasn't much of a 'track' on this hike, we were
            mostly walking through the stream. The orange markers were few and far between!</p>
    </GalleryCard>;
};