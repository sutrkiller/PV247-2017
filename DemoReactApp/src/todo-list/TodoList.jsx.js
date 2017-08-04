import React from 'react';
import { uuid } from '../Utils/uuidGenerator';
import Immutable from 'immutable';

export class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            list: Immutable.List([
                {
                    id: uuid(),
                    title: 'Wash dishes',
                    description: 'Not again!'
                },
                {
                    id: uuid(),
                    title: 'Kill spider',
                    description: 'All lives matter'
                }
            ])
        };
    }

    _onAddClick = () => {
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuid(),
                title: 'New item',
                description: ''
            })
        }));
    };

    render() {
        const { list } = this.state;

        const itemElements = list.map(item => {
            return (
                <li key={item.id}>{item.title}{' '}
                    {item.description && <small>({item.description})</small>}
                </li>);
        });

        return (
            <div>
                <ul>
                    {itemElements}
                </ul>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this._onAddClick}
                >
                    Add
                </button>
            </div>
        );
    }
}