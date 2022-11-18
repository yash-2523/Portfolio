DELIMITER $$

CREATE FUNCTION get_availability_of_runway(
    runway_id Varchar(50),
)
RETURNS INT
BEGIN
    DECLARE availability INT;
    SELECT COUNT(*) INTO availability FROM runway WHERE runway_id = runway_id;
    RETURN availability;
END$$



create function get_availability_of_runway(runway_id Varchar(50)) Returns INT READS SQL DATA
BEGIN 
DECLARE flight_id INT; 
SELECT id INTO flight_id from flights where 
(
    (takeoff_runway=runway_id or landing_runway=runway_id) and 
    (
        (ADDDATE(NOW(), INTERVAL -5 MINUTE)<=takeoff_time and ADDDATE(NOW(), INTERVAL -5 MINUTE)>=landing_time) or 
        (ADDDATE(NOW(), INTERVAL 5 MINUTE)<=takeoff_time and ADDDATE(NOW(), INTERVAL 5 MINUTE)>=landing_time)
    )
) LIMIT 1; 
Return flight_id;
END
//

SELECT id, length, flights.flight_id FROM runways INNER JOIN flights ON flights.id = get_availability_of_runway(runway_id);

CREATE VIEW weather_status_of_airport as
SELECT weather_status.*, airports.city,airports.country From weather_status inner join airports on weather_status.airport_id=airports.airport_id;

create function get_availability_of_stars(star_id INT, est_duration INT) Returns INT READS SQL DATA
BEGIN 
DECLARE flight_id INT; 
SELECT id INTO flight_id from flights where 
(
    (STAR=star_id) and 
    (
        (ADDDATE(NOW(), INTERVAL -5 MINUTE)<=ADDDATE(landing_time, INTERVAL est_duration MINUTE) and ADDDATE(NOW(), INTERVAL -5 MINUTE)>=landing_time) or 
        (ADDDATE(NOW(), INTERVAL 5 MINUTE)<=ADDDATE(landing_time, INTERVAL est_duration MINUTE) and ADDDATE(NOW(), INTERVAL 5 MINUTE)>=landing_time)
    )
) LIMIT 1; 
Return flight_id;
END
//


SELECT id from flights where 
(
    (STAR=2) and 
    (
        (ADDDATE(NOW(), INTERVAL -5 MINUTE)<=ADDDATE(landing_time, INTERVAL 1 MINUTE) and ADDDATE(NOW(), INTERVAL -5 MINUTE)>=landing_time) or 
        (ADDDATE(NOW(), INTERVAL 5 MINUTE)<=ADDDATE(landing_time, INTERVAL 1 MINUTE) and ADDDATE(NOW(), INTERVAL 5 MINUTE)>=landing_time)
    )
) LIMIT 1;


Create view star_availability as
SELECT stars.id, est_duration, flights.flight_id FROM stars INNER JOIN flights ON flights.id = get_availability_of_stars(stars.id, est_duration);


create function get_availability_of_sids(sid_id INT, est_duration INT) Returns INT READS SQL DATA
BEGIN 
DECLARE flight_id INT; 
SELECT id INTO flight_id from flights where 
(
    (SID=sid_id) and 
    (
        (ADDDATE(NOW(), INTERVAL -5 MINUTE)<=takeoff_time and ADDDATE(NOW(), INTERVAL -5 MINUTE)>=ADDDATE(takeoff_time, INTERVAL -est_duration MINUTE)) or 
        (ADDDATE(NOW(), INTERVAL 5 MINUTE)<=takeoff_time and ADDDATE(NOW(), INTERVAL 5 MINUTE)>=ADDDATE(takeoff_time, INTERVAL -est_duration MINUTE))
    )
) LIMIT 1; 
Return flight_id;
END
//

Create view sid_availability as
SELECT sids.id, est_duration, flights.flight_id FROM sids INNER JOIN flights ON flights.id = get_availability_of_sids(sids.id, est_duration);

Insert into flights ( flight_id , from_airport , to_airport , takeoff_runway , landing_runway , landing_time, takeoff_time, SID , STAR) 
values ("TCT-016", "JJR", "LUB", "RUN-002", "RUN-002", '2022-11-17 11:40:23' , '2022-11-18 04:11:31',1 ,2),
("TCT-016", "JJR", "LUB", "RUN-002", "RUN-002", '2022-11-11 11:40:23', '2022-11-18 04:11:31',1 ,2),
("TCT-016", "JJR", "LUB", "RUN-002", "RUN-002", '2022-11-23 11:40:23', '2022-11-25 04:11:31',1 ,2),
("TCT-016", "JJR", "LUB", "RUN-002", "RUN-002", '2022-11-12 11:40:23', '2022-11-20 04:11:31',1 ,2);

    Insert into flights ( flight_id , from_airport , to_airport , takeoff_runway , landing_runway , landing_time, takeoff_time, SID , STAR) 
    values ("TCT-016", "JJR", "LUB", "RUN-002", "RUN-002", ADDDATE(NOW(), INTERVAL -10 MINUTE) , ADDDATE(NOW(), INTERVAL 50 MINUTE),1 ,2);



SELECT * from hangers