package taylorswift.com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TaylorSwiftController {
	
	@GetMapping("/TaylorSwift")
	public String taylorswift() {
		return "homepage";
	}
	
	@GetMapping("/TaylorSwift/About")
	public String aboutTaylorSwift() {
		return "aboutTS";
	}
	
	@GetMapping("/TaylorSwift/Images")
	public String TaylorSwiftImages() {
		return "imagesTS";
	}
	
	@GetMapping("/TaylorSwift/SampleAudio")
	public String TaylorSwiftSampleAudio() {
		return "sampleaudioTS";
	}

	@GetMapping("/TaylorSwift/Albums")
	public String TaylorSwiftAlbums() {
		return "albumsTS";
	}
	
	@GetMapping("/TaylorSwift/SpotifyTracks")
	public String TaylorSwiftSpotifyTracks() {
		return "spotifyTracksTS";
	}
}
