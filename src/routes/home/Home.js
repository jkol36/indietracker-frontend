

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Indie Tracker';


const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Artist Stats</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-users fa-5x"
            count="400000"
            headerText="followers from spotify"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-users fa-5x"
            count="410000"
            headerText="Followers after refresh"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-users fa-5x"
            count="100000"
            headerText="New Followers"
            footerText="New followers"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-support fa-5x"
            count="10000"
            headerText="New Followers"
            footerText="View Details"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Followers Tracker
              <div className="pull-right">
                <DropdownButton title="edit" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Tracked Artists
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> Lil Wayne
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-twitter fa-fw" /> Kendrick lamar
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-envelope fa-fw" /> Lil Yahty
                <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>View All Alerts</Button>
          </Panel>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
