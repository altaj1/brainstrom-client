import { useEffect, useRef } from "react";

import Carousel from 'react-elastic-carousel';
const BestContestCreator = ({ contests }) => {
    const carouselRef = useRef(null);
    const calculateParticipationCount = (creatorEmail) => {
        return contests.filter(contest => contest.contentCreator.email === creatorEmail).length;
      };

      const sortCreatorsByParticipation = () => {
        
        return Object.values(creators).sort((a, b) => {
          const participationCountA = calculateParticipationCount(a.id);
          const participationCountB = calculateParticipationCount(b.id);
          return participationCountB - participationCountA; 
        });
      };
      const topCreators = sortCreatorsByParticipation().slice(0, 3);
      console.log(topCreators)
    useEffect(() => {
        const interval = setInterval(() => {
          if (carouselRef.current) {
            carouselRef.current.goTo( (carouselRef.current.getCurrentIndex() + 1) % topCreators.length );
          }
        },3000);
    
        return () => clearInterval(interval); // Clear the interval on component unmount
      }, []);
    return (
        <div className="top-creators-section">
      <h2 className="section-title">Top Contest Creators</h2>
      {/* <Carousel itemsToShow={3} pagination={false}>
        {topCreators.map(creator => (
          <div key={creator.id} className="creator-tile">
            <img src={creator.image} alt={creator.name} className="creator-image" />
            <div className="creator-info">
              <h3 className="creator-name">{creator.name}</h3>
              <p className="contest-name">{creator.latestContestName}</p>
              <p className="contest-description">{creator.latestContestDescription}</p>
              <p className="participation-count">Participation Count: {calculateParticipationCount(creator.id)}</p>
            </div>
          </div>
        ))}
      </Carousel> */}
    </div>
    );
};

export default BestContestCreator;