import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import LocationItem from './Item'
import { Consumer as MapConsumer } from '../../context/locations'

import './style.css'

export default () => (
  <MapConsumer>
    {({ locations, handleRemoveLocation, handleMoveLocation }) => (
      <DragDropContext onDragEnd={handleDragEnd(handleMoveLocation)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ul className="locationsList" ref={provided.innerRef}>
              {locations.map((location, i) => (
                <Draggable key={location.lng} draggableId={location.lng} index={i}>
                  {(provided, snapshot) => (
                    <li
                      className="locationItem"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <LocationItem
                        key={location.lng}
                        location={location}
                        index={i + 1}
                        handleRemoveLocation={handleRemoveLocation}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    )}
  </MapConsumer>
)

const handleDragEnd = handleDrag => drag => {
  drag.destination && handleDrag(drag.source.index, drag.destination.index)
}
