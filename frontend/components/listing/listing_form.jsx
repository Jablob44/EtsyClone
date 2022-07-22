import React from "react";
import { Link } from "react-router-dom";
console.log("hit listing form")
// import { Link } from "react-router-dom";
// console.log("hit listing form")

class ListingForm extends React.Component{
    constructor(props){
        super(props)
        console.log("listing id: ", this.props.listing.id)
        this.state = {
            id: this.props.listing.id,
            title: this.props.listing.title,
            body: this.props.listing.body,
            price: this.props.listing.price,
            author_id: this.props.currentUser.id,
            imageUrl: this.props.listing.photoUrl,
            imageFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    // handleSubmit(e){
    //     console.log(this.props.currentUser.id)
    //     console.log(this.props.createListing)
    //     e.preventDefault();
    //     const listing = Object.assign({}, this.state);
    //     this.props.action(listing)
    //     this.props.history.push(`users/${this.props.currentUser.id}`)
    // }

    handleSubmit(e) {
        // e.preventDefault();
        const formData = new FormData();
        console.log(this.state)
        formData.append('listing[title]', this.state.title);
        formData.append('listing[body]', this.state.body);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[author_id]', this.state.author_id);
        console.log(this.state.imageFile)
        console.log("immediately after setup", formData)
        if (this.state.imageFile) {
            
          formData.append('listing[photo]', this.state.imageFile);
          console.log("image file setup", formData)
        }
        if (this.props.formType === "Make listing"){
            $.ajax({
              url: '/api/listings',
              method: 'POST',
              data: formData,
              contentType: false,
              processData: false
            });
            console.log("after ajax", formData)

        }else{
            console.log("before updatedListing", formData)
            $.ajax({
                url: `/api/listings/${this.state.id}`,
                method: 'PATCH',
                data: formData,
                contentType: false,
                processData: false
              });
            // const updatedListing = {
            //     id: this.state.id,
            //     title: this.state.title,
            //     body: this.state.body,
            //     price: this.state.price,
            //     author_id: this.state.author_id,
            //     // photo: this.props.listing.photo
            // }
            // console.log("after updatedListing", formData)
            // this.props.action(updatedListing)
        }
        this.props.history.push('/')
      }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file });
        }

        if (file) {
        reader.readAsDataURL(file);
        } 
        else{
        this.setState({ imageUrl: "", imageFile: null });
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('listing[title]', this.state.title);
    //     if (this.state.photoFile) {
      
    //       formData.append('post[photo]', this.state.photoFile);
    //     }
    //     $.ajax({
    //       url: '/api/posts',
    //       method: 'POST',
    //       data: formData,
    //       contentType: false,
    //       processData: false
    //     });
    //   }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        const previewImg = this.state.imageUrl ? <img className="preview-image" src={this.state.imageUrl}/> : null
        return(
            <div>
                <form onSubmit={() => this.handleSubmit()} className="full-listing-form">
                    <h1 className="listing-form-title">{this.props.formType === "Make listing" ? "Make a listing" : "Edit your listing"}!</h1>
                    <br/>
                    <div className="listing-input">
                        <h2 className="label-for-listing-input">Listing info:</h2>
                        <label className="listing-form-input">
                            <div>
                                <h2 className="listing-title">Title:</h2>
                                <p>Enter a title for your listing.</p>
                            </div>
                            {/* <br/> */}
                            <input type="text" className="input-field-listing" value={this.state.title} onChange={this.update("title")}/>
                        </label>
                        <br/>
                        <label className="listing-form-input"> 
                            {/* <br/> */}
                            <div>
                                <h2 className="listing-form-price">Price:</h2>
                                <p>Enter a price for your listing.</p>
                            </div>
                            <input type="text" className="input-field-listing" placeholder="$" value={this.state.price} onChange={this.update("price")}/>
                            
                        </label>
                        <br/>
                        <label className="listing-form-input">
                            {/* <br/> */}
                            <div>
                                <h2 className="listing-form-body">Description:</h2>
                                <p>Give a detailed description for the product you are listing.</p>
                            </div>
                            <textarea className="description-field" value={this.state.body} onChange={this.update("body")}/>
                        </label>
                        <br/>
                    </div>
                    <div className="listing-input mini-margin photo-area">
                        <div className="left-side-image-upload">
                            <div>
                                <h2 className="label-for-listing-input">Add a photo:</h2>
                                <p className="photo-desc">Use a picture that shows off your product!</p>
                                <div className="upload-container">
                                    <input type='file' className="photo-upload" onChange={this.handleFile.bind(this)}/>
                                </div>
                            </div>
                            <div className="preview-container">
                                <h2 className="label-for-listing-input">Preview</h2>
                                {previewImg}
                            </div>
                        </div>
                        <div className="right-side-image-upload">
                            <h2 className="label-for-listing-input example-label-margin">Example photo:</h2>
                            <img className="preview-image example-image-margin" src="https://jjustice-dev.s3.us-west-1.amazonaws.com/exampleimage.jpeg"></img>
                        </div>
                    </div>
                    {/* <Link to={`/users/${this.props.currentUser.id}`}> */}
                        <input type="submit" className="submit-button-listing submit-button-arrange" value={this.props.formType === "Make listing" ? "Post listing" : "Update listing"}>
                            {/* <button className="non-button-button" onClick={() => <Link to={`/users/${this.props.currentUser.id}`}></Link>}>
                            </button> */}
                        </input>
                    {/* </Link> */}
                </form>
            </div>
        )
    }
}

export default ListingForm