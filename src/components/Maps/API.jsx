import axios from "axios";

export const GetData = async (sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://test.api.amadeus.com/v1/safety/safety-rated-locations/by-square?`,
            {
                params: {
                    south: sw.lat,
                    west: sw.lng,
                    north: ne.lng,
                    east: ne.lat,
                },
                headers: {
                    client_id: "uvvQgghWhJSLQNRYroTKpbIQOv6h8QbC",
                    client_secret: "OsARPxpGWkqg2J6b",
                },
            }
        );

        console.log("hey here!");
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
