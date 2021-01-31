
export const queryOptions = [
    {
        field: 'Work Item Type',
        operators: ['Equals', 'Contains', 'Does Not Contain'],
        values: ['Backlog', 'Bug', 'Task']
    },
    {
        field: 'Tags',
        operators: ['Include', 'Exclude'],
        values: ['UI', 'DSP', 'ADFR', 'DB']
    },
    {
        field: 'Created By',
        operators: ['Include', 'Exclude'],
        values: ['User A', 'User B', 'User C']
    },
    {
        field: 'Team',
        operators: ['Include', 'Exclude'],
        values: ['Team A', 'Team B', 'Team C']
    },
    {
        field: 'State',
        operators: ['Equals', 'Contains', 'Does Not Contain'],
        values: ['New', 'In Progress', 'Done']
    },
    {
        field: 'ID',
        operators: ['Equals', 'Starts With', 'Ends With'],
        values: ['323444233', '347869427', '097857483']
    },
]