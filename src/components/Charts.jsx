import React, { PureComponent } from "react";
import chartimage from '/pexels.jpg'
import '../styles/Chart.css'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/synchronized-area-chart-9jj95d";

  render() {
    return (
      <div className="chart-chartcard">
        <ResponsiveContainer width="77%" height={200} className=''>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div>
          <div className="chartcard">
            <div className="chart-div1">
              <p className="chart-paragraph1">Recent transaction</p>
              <p className="chart-paragraph2-view">View all</p>
            </div>

            <div className="chart-car-paragraph">
              <div className="Chart-card-1">
                <img src={chartimage} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>

              <div className="Chart-card-1">
                <img src={chartimage} alt="" className="chartimage" />
                <div className="chart-paragraph">
                  <div>
                    <p className="chart-paragraph1">Handajozz</p>
                    <p className="chart-paragraph2">coups</p>
                  </div>
                  <div>
                    <p className="chart-paragraph2">8:20 am</p>
                    <p className="chart-paragraph1">$ 80</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
