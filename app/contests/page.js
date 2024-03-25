import Link from "next/link";
import ContestCard from "./ContestCard"
import ProfileCard from "./ProfileCard";


const page = () => {

  const upcomingContests = [
    { id: 100, link: '/weekly-contest-100' },
    { id: 101, link: '/weekly-contest-101' },
  ];

  const pastContests = [
    { id: 98, link: '/weekly-contest-98' },
    { id: 97, link: '/weekly-contest-97' },
    { id: 96, link: '/weekly-contest-96' },
    { id: 95, link: '/weekly-contest-95' },
  ];

  const users = [
    { name: 'john_doe', rating: 1290, attended: 15 },
    { name: 'john_doe', rating: 1290, attended: 15 },
    { name: 'john_doe', rating: 1290, attended: 15 },
    { name: 'john_doe', rating: 1290, attended: 15 },
    { name: 'john_doe', rating: 1290, attended: 15 },
  ];

  return (
    <div className='w-full max-w-6xl flex mx-auto my-5 gap-5 px-2'>
      <div className="flex flex-grow flex-col gap-5">
        <div>
          <h1>Ongoing Contest</h1>
          <div className="mt-3 flex flex-col gap-2">
            <ContestCard 
              contestId={99}
              contestUrl={'/weekly-contest-99'}
              isOngoing={true}
            />
          </div>
        </div>

        <div>
          <h1>Upcoming Contests</h1>
          <div className="mt-3 flex flex-col gap-2">
            {upcomingContests.map(contest => (
              <ContestCard 
                key={contest.id}
                contestId={contest.id}
                contestUrl={contest.link}
                isUpcoming={true}
              />        
            ))}
          </div>
        </div>

        <div>
          <h1>Past Contests</h1>
          <div className="mt-3 flex flex-col gap-2">
            {pastContests.map(contest => (
              <ContestCard 
                key={contest.id}
                contestId={contest.id}
                contestUrl={contest.link}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="min-w-[350px] max-w-[350px] bg-light-2 rounded-lg h-fit shadow-lg">
        <div className="flex items-center gap-3 bg-light-3 pt-4 pb-3 px-6 rounded-t-lg">
          <img
            src='/ranking.png'
            alt='trophy-icon'
            className='w-6 h-6 object-contain'
          />
          <h1>Global Ranking</h1>
        </div>
        <div className="w-full mt-3 px-6">
          {users.map((user, index) => (
            <div key={index}>
              <ProfileCard
                id={index+1}
                username={user.name}
                rating={user.rating}
                attended={user.attended}
              />
              <hr className="h-0 border border-light-4 my-3" />
            </div>
          ))}
        </div>
        <div className="text-center mb-4"> 
          <Link href='/global-rankings' className="text-blue-500">
            View more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page