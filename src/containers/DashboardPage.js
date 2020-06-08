import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, dashBoardSelector } from '../slices/dashboard'


const DashboardPage = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(dashBoardSelector)
  return (
    <section>
      <h1>Dashboard</h1>
      <p>This is the dashboard.</p>
      <Link to="/posts" className="button">
        View Posts
      </Link>
      <div>count: {count}</div>
      <button onClick={() => dispatch(addCount())}>+1</button>
    </section>
  );
}

export default DashboardPage
