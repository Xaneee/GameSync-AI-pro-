use axum::{routing::post, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn process_nft_purchase(Json(payload): Json<serde_json::Value>) -> Json<serde_json::Value> {
    let buyer = payload["buyer"].as_str().unwrap();
    let asset_id = payload["asset_id"].as_str().unwrap();
    let price = payload["price"].as_u64().unwrap();

    Json(json!({ "status": "success", "message": format!("NFT {} purchased by {} for {} tokens", asset_id, buyer, price) }))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/nft/purchase", post(process_nft_purchase));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
