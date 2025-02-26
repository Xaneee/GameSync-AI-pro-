use axum::{routing::get, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn get_marketplace_listings() -> Json<serde_json::Value> {
    Json(json!([
        { "item": "Pro Video Filter Pack", "price": 500 },
        { "item": "AI Background Removal", "price": 750 },
        { "item": "3D Cinematic Effects", "price": 1200 }
    ]))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/marketplace/listings", get(get_marketplace_listings));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
