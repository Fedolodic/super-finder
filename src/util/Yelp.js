const apiKey = 'huPlqIKAyngHBkBTwYGMC_gF0zWhnXuO1dfZ-ircpjaJKUGVCJUuDhhhnzvO66KVJSAWFJ2aEiMCPHVcE8nlJL3C2CC0Jyda8TlQKYn_iMJMJKkZQdP7CqpCQDvQXnYx';

const Yelp = {
    search(term, location, sortBy) {
        /*fetch() won't function correctly due to CORS restrictions. We can bypass this restriction
          with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint,
          make them for the requesting app with the proper CORS permissions, and then return
          the response back to the requesting app*/
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(
            response => response.json()
        ).then(
            jsonResponse => {
                console.log(jsonResponse);
                /*If valid response returned from the Yelp API*/
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });
                }
            }
        );
    }
};

export default Yelp;