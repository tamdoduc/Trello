import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'

import './BoardContent.scss'


import Column from 'components/Column/Column'
import { mapOrder } from 'utilities/sorts'

import { initialData } from 'actions/initialData';

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState({})

  useEffect(() => {
    const boardFormDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFormDB) {
      setBoard(boardFormDB)


      setColumns(mapOrder(boardFormDB.columns, boardFormDB.columnOrder, 'id'));
    }
  }, []
  )

  if (isEmpty(board)) {
    return <div className="not-found" >Board not found</div>
  }
  if (isEmpty(columns))
    return <div className="not-found" >Columns not found</div>

  return (
    <div className="board-content">
      {columns.map((column, index) => <Column key={index} column={column} />)}
      <div className="add-new-column">
      <i className="fa fa-plus icon" />    Add another column
      </div>
    </div>
  )
}

export default BoardContent;