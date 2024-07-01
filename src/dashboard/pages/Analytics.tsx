
import ComboChart from "../Analytics-charts/ComboChart"
import Container from "../Analytics-charts/Container"
import MultiPieChart from "../Analytics-charts/MultiPieChart"
import NightingaleChart from "../Analytics-charts/NightingaleChart"
import PieChart from "../Analytics-charts/PieChart"
import PunchCardChart from "../Analytics-charts/PunchCardChart"
import ScatterChart from "../Analytics-charts/ScatterChart"
import USAMapChart from "../Analytics-charts/USAMapChart"


export default function Analytics() {
    return (
        <div >
            <>
                <span className="text-red-600">Pie</span>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 ">
                    <Container><PieChart /></Container>
                    <Container><MultiPieChart /></Container>
                    <Container><NightingaleChart /></Container>
                </div>
            </>
            <>
                <span className="text-red-600">Bar</span>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
                    <Container><ComboChart /></Container>
                    <Container><ScatterChart /></Container>
                </div>
            </>
            <>
                <span className="text-red-600">Scatter</span>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
                    <Container><PunchCardChart /></Container>
                    <Container><USAMapChart /></Container>
                </div>
            </>

        </div>
    )
}

