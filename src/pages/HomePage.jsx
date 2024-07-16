import LastGradeCard from "../components/LastGradeCard"
import MyProposalsCard from "../components/MyProposalsCard"
import NearestDutiesCard from "../components/NearestDutiesCard"
import YourLaundryRecordsCard from "../components/YourLaundryRecordsCard"


const HomePage = () => {
    return (
        <>
            <LastGradeCard />
            <NearestDutiesCard />
            <YourLaundryRecordsCard />
            <MyProposalsCard />
        </>
    )
}

export default HomePage