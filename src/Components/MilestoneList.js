import React, { Component } from 'react'
import ListItem from './ListItem';
import Pagination from './Pagination'

export class MilestoneList extends Component {
  state = {
    page: 1,
    per_page: 4,
    initial_page: 0,
    final_page: 4,
    total_pages: 0
  }

  componentDidMount() {
    if (this.props.milestones) {
      this.setPagination();
    }
  }

  setPagination = () => {
    let total_pages = Math.ceil(this.props.milestones.length / this.state.per_page)
    this.setState({ total_pages })
  }

  nextPage = () => {
    const { page, initial_page, per_page, final_page } = this.state;
    this.setState({ page: page + 1, initial_page: initial_page + per_page, final_page: final_page + per_page })
  }
  
  prevPage = () => {
    const { page, initial_page, per_page, final_page } = this.state;
    this.setState({ page: page -1, initial_page: initial_page - per_page, final_page: final_page - per_page })
  }

  renderContent = () => {
    const { initial_page, final_page } = this.state
    if (this.props.milestones) {
      return(
        <div>
          {this.props.milestones.slice(initial_page, final_page).map(mil => (
            <ListItem key={mil.id} milestone={mil} age_range={this.props.age_range} />
          ))}
        </div>
      )
    }
  }
  render() {
    const { page, initial_page, per_page, total_pages } = this.state;
    return (
      <div>
        {this.renderContent()}
        <Pagination 
          total_pages={total_pages}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
          initial_page={initial_page}
          page={page}
          per_page={per_page}
          milestone={this.props.milestones}
        />
      </div>
    )
  }
}

export default MilestoneList
