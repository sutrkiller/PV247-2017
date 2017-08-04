import React from 'react';
import { uuid } from '../Utils/uuidGenerator';

export class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            list: [
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
            ]
        };

        this._onAddClick = this._onAddClick.bind(this);
    }

    _onAddClick() {
        // Bad practise for demo purposes
        this.state.list.push({
            id: uuid(),
            title: 'New item',
            description: ''
        });

        this.setState({
            list: this.state.list,
        });
    }

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