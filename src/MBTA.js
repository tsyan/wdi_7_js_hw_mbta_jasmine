// my work is based on the "solution" branch of wdi_7_js_lab_mbta

var MBTA = function(startingLine, startingStation, endingLine, endingStation) {

	this.lines = {
		'green':['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'],
		'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
		'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	};

	this.startingLine = startingLine;
	this.startingStation = startingStation;
	this.endingLine = endingLine;
	this.endingStation = endingStation;

	this.distance_to_park_st = function(line, stop) {
		var current_line = this.lines[line], // array of stops
				index_of_park_st = current_line.indexOf('park st'),
				index_of_current_stop = current_line.indexOf(stop),
				distance = Math.abs(index_of_current_stop - index_of_park_st);
		return distance;
	};

	this.distance_single_line = function(line, start_stop, end_stop) {
		var current_line = this.lines[line],
				index_of_start = current_line.indexOf(start_stop),
				index_of_end = current_line.indexOf(end_stop);
				distance = Math.abs(index_of_end - index_of_start);
		return distance;
	};

	this.total_distance = function() {
		if (this.startingLine === this.endingLine) {
			return this.distance_single_line(this.startingLine, this.startingStation, this.endingStation);
		}else if (this.startingLine !== this.endingLine) {
			return this.distance_to_park_st(this.startingLine, this.startingStation) + this.distance_to_park_st(this.endingLine, this.endingStation);
		};
	};
};


