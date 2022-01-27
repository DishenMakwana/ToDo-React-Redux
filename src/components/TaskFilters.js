import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TaskFilters.css';
import { changeFilter } from '../redux/reducer';

function TaskFilters() {
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state);
    const filterOrder = filter;

    const changeFilterOrder = (filter) => {
        dispatch(changeFilter(filter));
    };

    return (
        <ul className={'task-filters'}>
            <li onClick={() => changeFilterOrder('all')}>
                <button className={filterOrder === 'all' ? 'active' : ''}>
                    View All
                </button>
            </li>
            <li onClick={() => changeFilterOrder('active')}>
                <button className={filterOrder === 'active' ? 'active' : ''}>
                    Active
                </button>
            </li>
            <li onClick={() => changeFilterOrder('completed')}>
                <button className={filterOrder === 'completed' ? 'active' : ''}>
                    Completed
                </button>
            </li>
        </ul>
    );
}

export default TaskFilters;
