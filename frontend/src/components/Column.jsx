import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import AddTask from './AddTask';

const Container = styled.div`
    margin: 8px;
    border: 1px solid black;
    border-radius: 2px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    background-color: white;
`;

const Title = styled.h3`
    padding: 5px;
`;

const TaskList = styled.div`
    padding: 8px;
`;

function Column(props) {
    function deleteColumn(columnId, index) {
        const columnTasks = props.board.columns[columnId].taskIds;

        const finalTasks = columnTasks.reduce((previousValue, currentValue) => {

        }, props.board.tasks);
    }

    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {provided => (
                <Container {...provided.draggableProps} ref={provided.innerRef}>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    <Droppable droppableId={props.column.id} type="task">
                        {provided => (
                            <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    props.tasks.map((task, index) =>
                                        (<Task key={task.id} task={task} index={index} columnId={props.column.id} />)
                                    )
                                }
                                {provided.placeholder}
                                <AddTask  columnId={props.column.id} board={props.board} setBoard={props.setBoard} />
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
            )}
        </Draggable>
    )
}

export default Column;