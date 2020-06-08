import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import * as DashboardActions from '../actions/dashboardAction';


const DashboardPage = (props) => {
  const { dispatch, count } = props;
  return (
    <section>
      <h1>Dashboard</h1>
      <p>This is the dashboard.</p>
      <Link to="/posts" className="button">
        View Posts
      </Link>
      <div>count: {count}</div>
      <button onClick={() => dispatch(DashboardActions.addCount())}>+1</button>
    </section >
  );
}

const mapStateToProps = state => ({
  count: state.dashboard.count,
})

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(DashboardActions, dispatch),
//   };
// }

export default connect(mapStateToProps)(DashboardPage)

